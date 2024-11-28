import React, { memo } from "react";

function DisplayCount(props) {
  return <h2>{props.count}</h2>;
}
// export default memo(DisplayCount);
export default memo(DisplayCount);
