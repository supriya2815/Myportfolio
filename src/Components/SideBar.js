import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu"; // menu icon

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="bg-light border-end vh-100 position-sticky top-0"
      style={{
        width: collapsed ? "70px" : "200px",
        transition: "0.3s",
        overflow: "auto",
        marginTop: "56px",
      }}
    >
      <Button
        variant="light"
        className="m-2"
        onClick={() => setCollapsed(!collapsed)}
      >
        <MenuIcon fontSize="small" />
      </Button>

      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/">{collapsed ? "🏠" : "Home"}</Nav.Link>
        <Nav.Link href="/trending">{collapsed ? "🔥" : "Trending"}</Nav.Link>
        <Nav.Link href="/subscriptions">
          {collapsed ? "📺" : "Subscriptions"}
        </Nav.Link>
        <Nav.Link href="/library">{collapsed ? "📚" : "Library"}</Nav.Link>
      </Nav>
    </div>
  );
}