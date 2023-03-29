import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/devices";
export const CourseItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }

  @media ${device.mobileL} { 
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }
`


export const Description = styled.span`
  width: 23%;
  display: flex;
`
export const Category = styled.span`
  width: 23%;
  display: flex;
`

export const Name = styled.span`
  width: 23%;
  padding-left: 10px;
`

export const Price = styled.span`
  width: 23%;

`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

export const DetailButton = styled(Link)`
  padding-left: 12px;
  cursor: pointer;
`