import { CSSProperties, ReactNode } from "react";
import { EditOutlined, DeleteFilled, HeartOutlined } from "@ant-design/icons";

const likeBtnStyle: CSSProperties = { color: "#f00" };

const Actions: ReactNode[] = [
  <HeartOutlined key="like" style={likeBtnStyle} />,
  <EditOutlined key="edit" />,
  <DeleteFilled key="delete" />,
];

export default Actions;
