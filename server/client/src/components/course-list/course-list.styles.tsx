import styled from "styled-components";
import { device } from "../../utils/devices";

export const CourseListContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`


export const CourseListHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
    width: 23%;
  
    &:last-child {
      width: 8%;
    }

    @media ${device.mobileL} { 
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }
`

export const AddButton = styled.div`
    height: 50px;
    width: 50px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 40px;
    cursor: pointer;
`

