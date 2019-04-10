import * as React from "react";

export const toLineFeed = (text: string) => {
  return text.split("\n").map(item => {
    // 2回以上改行された場合に必要
    if (item === "") {
      return <br />;
    }
    return <>item<br /></>;
  });
}