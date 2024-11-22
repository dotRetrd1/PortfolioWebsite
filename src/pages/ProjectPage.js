import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
const ProjectPage = () => {
    const { id } = useParams();
    // You can fetch detailed project data here using `id`.
    return (_jsxs(Layout, { children: [_jsx("h1", { children: "Project Details" }), _jsxs("p", { children: ["Details for project ID: ", id] })] }));
};
export default ProjectPage;
