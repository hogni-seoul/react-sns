import React, { useMemo } from "react";

// components
import { List } from "antd";

function FollowList({ header, data }) {
  const style = useMemo(() => ({ marginBottom: "20" }), []);
  const grid = useMemo(() => ({ gutter: "4", xs: "2", md: "3" }), []);

  return <List style={style} grid={grid} header={<div>{header}</div>} />;
}

export default FollowList;
