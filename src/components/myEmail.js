import StyledPaper from "./styledPaper";
import { email } from "../data/info.js";

export default function MyEmail() {
  return (
    <StyledPaper sx={{ marginTop: "1rem" }}>
        <StyledPaper>
            <h3 style={{ margin: "0 0 0.25rem 0" }}>My Email</h3>
            {email}
        </StyledPaper>
    </StyledPaper>
  );
}
