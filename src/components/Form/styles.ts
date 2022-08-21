import styled from "styled-components";
import { Media } from "../../ui/media";

const StyledForm = styled.form`
max-width: 331px;
margin: 0 auto;

${Media.DESKTOP} {
    width: 456px;
}
`;

const Title = styled.h2`
font-size: 24px;
line-height: 35px;
text-align: center;
margin-bottom: 45px;

${Media.DESKTOP} {
    font-size: 40px;
}
`;

const Subtitle = styled.h3`
font-size: 24px;
line-height: 28px;
color: rgba(117, 108, 108, 0.57);
text-align: center;
margin-bottom: 45px;

${Media.DESKTOP} {
    font-size: 32px;
}
`;

const Total = styled.p`
font-size: 24px;
line-height: 35px;
margin-bottom: 45px;
`;

export { StyledForm, Title, Subtitle, Total };