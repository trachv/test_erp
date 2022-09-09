import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/header/header.component";
import SelectInput from "../components/select-input/select-input.component";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import { IClient, IProject } from "../types/types.common";

const HomePage = () => {

  let operationDate: string = new Date(Date.now()).toLocaleDateString().replace(/\./g, '');


  const [currentClient, setCurrentClient]: [string, (curValue: string) => void] = useState('');
  const [currentProject, setCurrentProject]: [string, (curValue: string) => void] = useState('');


  const defaultClients: IClient[] = [];
  const [clients, setClients]: [IClient[], (clients: IClient[]) => void] =
    useState(defaultClients);

  const defaultProjects: IProject[] = [];
  const [projects, setProjects]: [IProject[], (projects: IProject[]) => void] =
    useState(defaultProjects);

  useEffect(() => {
    updateClients();
    updateProjects()
  }, []);

  const updateClients = () => {
    axios
      .get<IClient[]>("http://localhost:3001/api/clients")
      .then((response) => {
        setClients(response.data);
      });
  };

  const updateProjects = (curValue?: string) => {
    axios.get<IProject[]>("http://localhost:3001/api/projects").then((res) => {
      setProjects(res.data);
      if (curValue) {
        setCurrentProject(curValue);
      }
    });
  };

  const changeClientHandler = (value: string) => {
    setCurrentClient(value);
  };

  const changeProjectHandler = (value: string) => {
    setCurrentProject(value);
    const findedProjects = projects.find(project => project.id as unknown as string === value);
    if (findedProjects) { 
      setCurrentClient(findedProjects.ID_DEP_CLIENT);
    }

  };

  const onClickHandler = () => {
    axios.post<IProject>("http://localhost:3001/api/projects", {
      ID_DEP_CLIENT: currentClient,
      ID_PROJECT: `${currentClient}-${operationDate}`,
    }).then(res => {
      updateProjects(res.data.id as unknown as string);
    })
  };

  return (
    <>
      <HeaderComponent />
      <Box sx={{ p: 1, width: "30%" }}>
        <Container>
          <SelectInput
            label="Клиент №"
            selectedValue={currentClient}
            handleChange={changeClientHandler}
            data={clients.map((element) => {
              return {
                value: element.ID_DEP_CLIENT,
                label: element.ID_DEP_CLIENT,
              };
            })}
          />
          <Box sx={{ pt: 1, pb: 1 }}>
            <Button variant="outlined" onClick={onClickHandler}>
              Создать проект
            </Button>
          </Box>
          <SelectInput
            label="Проект №"
            selectedValue={currentProject}
            handleChange={changeProjectHandler}
            data={projects.map((element) => {
              return { value: element.id as unknown as string, label: `${element.id}-${element.ID_PROJECT}` };
            })}
          />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
