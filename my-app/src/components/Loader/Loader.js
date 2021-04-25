import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  border-color: blue;
  position: absolute;
  top: calc(50vh - 75px);
  left: calc(50vw - 75px);
`;

export const Loader = ({loading}) => (
  <BounceLoader css={override} loading={loading} size={80} />
);
