import styled from "styled-components";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 4px;
  }
`;

export const PasswordCheckLabel = styled(InputLabel)`
  color: ${({ error }) => error && "#e02020"};
`;
