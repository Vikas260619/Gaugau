import { PATHS } from "./paths";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import CustomersPage from "../pages/CustomersPage";
import CustomerDetailsPage from "../pages/CustomerDetailsPage";
import ClientsPage from "../pages/ClientsPage";
import ClientDetailsPage from "../pages/ClientDetailsPage";
import CampaignsPage from "../pages/CampaignsPage";

const routes = [
  { path: PATHS.login, element: <LoginPage /> },
  { path: PATHS.dashboard, element: <DashboardPage /> },
  { path: PATHS.customers, element: <CustomersPage /> },
  { path: PATHS.customerDetails, element: <CustomerDetailsPage /> },
  { path: PATHS.clients, element: <ClientsPage /> },
  { path: PATHS.clientDetails, element: <ClientDetailsPage /> },
  { path: PATHS.campaigns, element: <CampaignsPage /> },
];

export default routes;
