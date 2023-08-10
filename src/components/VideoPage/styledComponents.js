import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const VideoItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => (props.theme === true ? '#f9f9f9' : '#0f0f0f')};
  @media (max-width: 767px) {
    margin-left: 0px;
  }
`
export const VideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  @media (max-width: 767px) {
    padding: 20px 0px;
  }
`
export const PlayerContainer = styled.div`
  height: 600px;
  @media (max-width: 912px) {
    height: 380px;
  }
  @media (max-width: 450px) {
    height: 200px;
  }
`

export const Title = styled.p`
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  @media (max-width: 576px) {
    margin-left: 10px;
  }
`
export const VideoStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ViewsAndDate = styled.p`
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`
export const Dot = styled.span`
  font-weight: 800;
  margin: 0px 5px;
`
export const LikeAndSave = styled.div`
  display: flex;
  align-items: center;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${props => props.textColor};
  padding: 0;
  margin-right: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ButtonText = styled.p`
  font-size: 12px;
  margin-left: 5px;
`
export const HrLine = styled.hr`
  border: 1px solid #64748b;
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  margin-top: 10px;
  @media (max-width: 576px) {
    margin-left: 10px;
  }
`
export const ChannelLogo = styled.img`
  width: 40px;
  align-self: flex-start;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const ChannelName = styled.p`
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`
export const ChannelSubscribers = styled.p`
  color: #64748b;
  font-size: 12px;
  margin-top: 5px;
`
export const ChannelDescription = styled.p`
  color: ${props => (props.theme === true ? '#475569' : '#ffffff')};
  font-size: 14px;
  font-weight: 500;
  margin-top: 16px;
  margin-left: 50px;
  @media (max-width: 576px) {
    margin-left: 10px;
  }
`
export const ButtonCard = styled.div`
  display: flex;
  background: none;
`
