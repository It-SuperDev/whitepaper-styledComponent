import styled from 'styled-components';
import {
  Box,
  Typography,
  Grid,
} from '@mui/material';

export const GoTop = styled.img`
  display: none;
  @media only screen and (max-width: 600px) {
    position: fixed;
    display: block;
    bottom: 30px;
    left: calc(50% - 20.5px);
    z-index: 92;
  }
`

export const PaperWrap = styled(Grid)`
  overflow:hidden;
  position: relative;
`
export const SidbarGrid = styled(Grid)`
  width: 20%;
`
export const PaperMain = styled(Grid)`
  width: 80%;  
  
  @media only screen and (max-width: 1200px) {
    width: 100% !important;
  }
`

export const BackgroundCircle = styled(Box)`
  width: 100vw;
   top: 0px;
  left: 0px;
  z-index:-9;
`
export const HeaderMenu = styled(Box)`
  background-color: #ffffff;
  width: calc(100% - 4rem);
  left: 0;
  padding: 2rem;
  display: none;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 90;
  position: fixed;
  box-shadow: 0 1px 12px 0 #ced6db;

  @media only screen and (max-width: 1200px) {
      display: flex;
  }
`

export const CloseBack = styled(Box)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 95;
`

export const SideBar = styled(Box)`
  border-right: 1px solid #CED6DB !important;
  z-index: 99 !important;
  min-height: 100vh !important;
  height: 100% !important;
  width: 20%;
  position: fixed !important;
  min-width: 20%;
  
  @media only screen and (max-width: 1200px) {
    background: white;
    box-shadow: 0 0 9px 0px grey;
    transition: left 1s;
    width: 300px;
    left: ${(props: any) => props.menu ? "0px;" : "-320px;"}
  }
`;

export const SidebarLogo = styled(Box)`
  background-image: url("./assets/img/sidebarLogo.png") !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  padding: 3.5rem !important;
  border-bottom: 1px solid #CED6DB !important;
  background-color: #ffffffd9;
`;

export const SidebarItems = styled(Box)`
  background-color: #ffffffd9;
`

export const SidebarItem = styled(Grid)`
  align-items: center !important;
  justify-content: flex-start !important;
  user-select: none !important;
  border-bottom: 1px solid #CED6DB !important;
  background-color: ${(props: any) => props.listitem === props.select ? "#8080800d;" : "#ffffff00;"}
`;

export const SidebarIcon = styled(Box)`
  display:flex !important;
  padding: 0 1rem !important;
  width: 1rem !important;
`;

export const SidebarName = styled(Typography)`
  font-family: Sora !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 50px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: #7B8992 !important;
`;

export const PaperBox = styled(Box)`
  padding: 3.31rem 0 5rem 0 !important;
  z-index: 99 !important;

  @media only screen and (max-width: 1200px) {
    padding-top: 10rem !important;
    background-color: #ffffff54;
  }
`;

export const ItemBlock = styled(Grid)`
  padding: 0 4.56rem;
  flex-direction: column !important;

  @media only screen and (max-width: 900px) {
    padding: 2rem !important;
  }
`;

export const Hr = styled(Box)`
  height: 1px !important;
  margin: 1rem 0 !important;
  width: 100%;
  background: #CED6DB !important;
`;

export const MHr = styled(Box)`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block !important;
    height: 1px !important;
    margin: 1rem -2rem !important;
    width: calc(100% + 4rem) !important;
    background: #CED6DB !important;
  }
`;

export const PageTitle = styled(Typography)`
  font-family: Sora !important;
  font-size: 34px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 43px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
`;

export const Title = styled(Typography)`
  font-family: Sora !important;
  font-size: 25px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 51px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  margin:0.5rem 0 !important;
`;

export const FirstSubTitle = styled(Typography)`
  font-family: Sora !important;
  font-size: 29px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 60px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: #7B8992 !important;

  @media only screen and (max-width: 600px) {
    padding: 1.5rem 0;
    font-family: Sora !important;
    font-size: 17px !important;
    font-weight: 400 !important;
    line-height: 26px !important;
    letter-spacing: 0em !important;
    text-align: left !important;
  }
`

export const SubTitle = styled(Typography)`
  font-family: Sora !important;
  font-size: 29px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 60px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: #7B8992 !important;
`;

export const SubDesc = styled(Typography)`
  font-family: Sora !important;
  font-size: 24px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 66px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: #7B8992 !important;
`;

export const Desc = styled(Typography)`
  color: #7B8992 !important;
  margin-bottom: 2rem !important;
`;

export const DescShortB = styled(Typography)`
  color: #7B8992 !important;
  margin-bottom: 1rem !important;
`;

export const DescFirst = styled(Typography)`
  color: #7B8992 !important;
  margin: 2rem 0 !important;
`;

export const DescUl = styled(Typography)`
  color: #7B8992 !important;
`;

export const First = styled(Grid)`
  position:relative !important;
  margin-top: 3rem !important;
`;

export const Graphic = styled(Grid)`
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  height: 100% !important;
  position: absolute !important;
  width: 100% !important;
  padding:5rem !important;
  z-index: -1 !important;

  @media only screen and (max-width: 900px) {
      display: none !important;
  }
`;

export const Including = styled(Grid)`
  width:100% !important;
  justify-content: space-between !important;
`;

export const IncludItemOne = styled(Box)`
  display: flex !important;
  width:100% !important;
`;

export const IncludLogo = styled(Box)`
  width:4rem !important;
`;

export const IncludDesc = styled(Box)`
  display:flex !important;
  flex-direction: column !important;
  width: calc(100% - 4rem);
  margin-bottom: 2rem !important;

  @media only screen and (max-width: 600px) {
    margin-bottom: 1rem !important;
  }
`;

export const IncludDescHead = styled(Box)`
  font-family: Sora !important;
  font-size: 22px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 22px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  margin: 0.5rem 0 !important;
  color:background: #333333 !important;
`;

export const IncludDescBody = styled(Box)`
  font-family: Sora !important;
  font-size: 12px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 18px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: #7B8992 !important;
`;

export const StepperWrap = styled(Grid)`
  margin-top:3rem !important;
`;

export const Stepper = styled(Grid)`
  position: relative !important;
  padding-top: 0.2rem !important;
`;

export const StepTitle = styled(Box)`
  font-family: Sora !important;
  font-size: 35px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 1 !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: #000000 !important;
  max-width: 3rem !important;
  min-width: 3rem !important;
`;

export const Step = styled(Box)`
  margin: 0 2rem !important;
  width: 0.5rem !important;
  position: relative !important;  
  display: flex !important;
  justify-content: center !important;
`;

export const StepMark = styled(Box)`
  width: 1.2rem !important;
  height: 1.2rem !important;
  background-color: #C9AEFF !important;
  position: absolute !important;
  border-radius: 50% !important;
  top: 0px !important;
  display: flex !important;
  justify-content: center !important;
`;

export const StepStick = styled(Box)`
  background-color: #DFE6EA !important;
  width: 100% !important;
  height: calc(100% - 1.4rem) !important;
  position: absolute !important;
  bottom: 0 !important;
`;

export const StepDesc = styled(Grid)`
  padding-bottom: 3rem !important;
`;

export const ChartWrap = styled(Grid)`
  margin: 1rem 0 !important;
`;

export const Chart = styled(Grid)`
  
`
export const ChartDesc = styled(Grid)`
  display:flex !important;
  flex-direction: column !important;  
  align-items: center !important;
  justify-content: center !important;
`

export const ChartDescItem = styled(Grid)`
  align-items: center !important;
  margin: 0.25rem 0 !important;
`

export const ChartPart1 = styled(Box)`
  width: 4rem !important;
  height: 1.5rem !important;
  margin-right: 1rem !important;
  background-color: #FFE4B0 !important;
`

export const ChartPart2 = styled(Box)`
  width: 4rem !important;
  height: 1.5rem !important;
  margin-right: 1rem !important;
  background-color: #92E4CA !important;
`

export const ChartPart3 = styled(Box)`
  width: 4rem !important;
  height: 1.5rem !important;
  margin-right: 1rem !important;
  background-color: #A8BAFF !important;
`

export const ChartPart4 = styled(Box)`
  width: 4rem !important;
  height: 1.5rem !important;
  margin-right: 1rem !important;
  background-color: #C2FEFA !important;
`
export const ChartPart5 = styled(Box)`
  width: 4rem !important;
  height: 1.5rem !important;
  margin-right: 1rem !important;
  background-color: #FFA8BD !important;
`
export const ChartPartName = styled(Typography)`
  font-family: Sora !important;
  font-size: 17px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 35px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color: #7B8992 !important;
`

export const Links = styled(Grid)`
  margin: 1rem 0 !important;
  @media only screen and (max-width: 700px) {
      justify-content: space-between !important;
    
    & > div {
      padding: 0px;
    }
  }
`

export const LinkItem = styled(Box)`
  padding-right: 1rem
`

export const Footer = styled(Grid)`
  margin: 2rem 0 0 0 !important;
  flex-direction: column;
`

export const Megaphone = styled(Box)`
  width: 3rem !important;
  display: flex;
`
export const MegaIcon = styled.img`
  width: 1.5rem;
`

export const FooterContent = styled(Grid)`

`

export const FooterTitle = styled(Typography)`
  font-family: Sora !important;
  font-size: 20px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 34px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color:#7B8992 !important;
`
export const FooterBody = styled(Typography)`
  font-family: Sora !important;
  font-size: 20px !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: 34px !important;
  letter-spacing: 0em !important;
  text-align: left !important;
  color:#7B8992 !important;
  padding-left: 3rem;

  @media only screen and (max-width: 900px) {
    padding: 0px !important;
    font-size: 18px !important;
  }
`
export const CircleBackground = styled(Box)`
  background-image: url("./assets/img/background.svg") !important;
  width: 100% !important;
  height: 100% !important;
`;

export const Circle1 = styled(Box)`
  opacity: 0.75 !important;
  right: -300px;
  top: -300px;
  z-index:-5 !important;
  position:absolute !important;
  height: 700px !important;
  width: 700px !important;
  border-radius: 65px !important;
  background: radial-gradient(50% 50% at 50% 50%, #92E4CA 0%, rgba(255, 255, 255, 0) 100%) !important;
`

export const Circle2 = styled(Box)`
  top: 700px;
  left: -400px;
  opacity: 0.75 !important;
  z-index: -5 !important;
  position: absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(50% 50% at 50% 50%, #A8BAFF 0%, rgba(255, 255, 255, 0) 100%) !important;
`

export const Circle3 = styled(Box)`
  right: -400px;
  top: 20%;
  opacity: 0.75 !important;
  z-index: -5 !important;
  position: absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(50% 50% at 50% 50%, #C9AEFF 0%, rgba(255, 255, 255, 0) 100%) !important;
`
export const Circle4 = styled(Box)`
  top: 25%;
  left: -400px;
  opacity: 0.75 !important;
  z-index:-5 !important; 
  position:absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(46.29% 46.29% at 50% 50%, #E2E8FF 0%, rgba(255, 255, 255, 0) 100%);
`


export const Circle14 = styled(Box)`
  top: 600%;
  left: -400px;
  opacity: 0.75 !important;
  z-index:-5 !important; 
  position:absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(50% 50% at 50% 50%, #FFA8BD 0%, rgba(255, 255, 255, 0) 100%) !important;
`
export const Circle5 = styled(Box)`
  opacity: 0.75 !important;
  right: -400px;
  top: 30%;
  z-index:-5 !important;
  position:absolute !important;
  height: 700px !important;
  width: 700px !important;
  border-radius: 65px !important;
  background: radial-gradient(50% 50% at 50% 50%, #A8BAFF 0%, rgba(255, 255, 255, 0) 100%) !important;
`

export const Circle6 = styled(Box)`
  left: -400px;
  top: 40%;
  opacity: 0.75 !important;
  z-index:-5 !important; 
  position:absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(50% 50% at 50% 50%, #FFA8BD 0%, rgba(255, 255, 255, 0) 100%);
`

export const Circle7 = styled(Box)`
  right: -400px;
  top: 47%;
  opacity: 0.75 !important;
  z-index:-5 !important; 
  position:absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(50% 50% at 50% 50%, #FFE4B0 0%, rgba(255, 255, 255, 0) 100%) !important;
  `

export const Circle8 = styled(Box)`
  top: 60%;
  left: -400px;
  opacity: 0.75 !important;
  z-index: -5 !important;
  position: absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(50% 50% at 50% 50%, #A8BAFF 0%, rgba(255, 255, 255, 0) 100%);
`

export const Circle9 = styled(Box)`
  bottom: -400px;
  left: -400px;
  opacity: 0.75 !important;
  z-index: -5 !important;
  position: absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(50% 50% at 50% 50%, #A8BAFF 0%, rgba(255, 255, 255, 0) 100%) !important;
`

export const Circle10 = styled(Box)`
  top: 75%;
  right: -400px;
  opacity: 0.75 !important;
  z-index: -5 !important;
  position: absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(50% 50% at 50% 50%, #FFA8BD 0%, rgba(255, 255, 255, 0) 100%);
`

export const Circle11 = styled(Box)`
  top: 90%;
  right: -400px;
  opacity: 0.75 !important;
  z-index: -5 !important;
  position: absolute !important;
  height: 700px !important;
  width: 700px !important;
  background: radial-gradient(50% 50% at 50% 50%, #C9AEFF 0%, rgba(255, 255, 255, 0) 100%);
`

export const CircleImg = styled.img`
height: 100% !important;
width: 100%; !important
`

export const Formular1 = styled.span`
  font-size: 1.17em;
  font-weight: bold;
  margin: 0;
  font-family: "Telex";
  display: inline;
  color: gray;
`

export const Formular = styled(Typography)`
  font-family: "Telex";
  display: inline;
  color: gray;
  font-size: 1.17em;
  margin: 5px 0;
`

export const Formular2 = styled(Typography)`
  font-family: "Telex";
  display: inline;
  color: gray;
  font-size: 1.17em;
  margin: 5px 0;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`
export const FractionHr = styled.span`
  margin: 1px 0;
  width: 70px;
  height: 1px;
  background: gray;
`

export const Fraction = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 7px;
`
