import { FC, ReactNode } from "react";

import Button from "../button/button.component";
import { ControlPanelContainer } from "./control-panel.styles";

type ControlPanelProps = {
	children?: ReactNode;
};

const ControlPanel: FC<ControlPanelProps> = ({ children }) => {
	return <ControlPanelContainer>{children}</ControlPanelContainer>;
};

export default ControlPanel;
