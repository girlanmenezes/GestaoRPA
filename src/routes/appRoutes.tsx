import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import RobotPage from "../pages/dashboard/RobotPage";
import Relatorio from "../pages/dashboard/Relatorio";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import HomeIcon from '@mui/icons-material/Home';
import TaskPage from "../pages/configuracao/TaskPage";
import DadosPage from "../pages/configuracao/DadosPage";
import ComponentPageLayout from "../pages/configuracao/ComponentPageLayout";


const appRoutes: RouteType[] = [
  {
    index: true,
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Página Inicial",
      icon: <HomeIcon />
    }
  },
  {
    element:<ComponentPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Relatório",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/dashboard/robot",
        element: <RobotPage />,
        state: "dashboard.robot",
        sidebarProps: {
          displayText: "Detalhado"
        },
      },
      {
        path: "/dashboard/report",
        element: <Relatorio />,
        state: "dashboard.repot",
        sidebarProps: {
          displayText: "Sintético"
        }
      }
    ]
  },
  {
    element: <ComponentPageLayout />,
    state: "configuration",
    sidebarProps: {
      displayText: "Configuração",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/configuration/task",
        element: <TaskPage />,
        state: "configuration.task",
        sidebarProps: {
          displayText: "Robôs"
        },
      },
      {
        path: "/configuration/dados",
        element: <DadosPage />,
        state: "configuration.dados",
        sidebarProps: {
          displayText: "Dados"
        }
      }
    ]
  }
];

export default appRoutes;