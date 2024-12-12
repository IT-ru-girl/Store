
import {
    GridContainer,
} from "../article/Article.styles";
import {Article} from "../article/Article";
import {Item} from "../../Item";

export const Main = () => {
    return (
        <GridContainer container spacing={5}>
            <Article/>
            <Item/>
        </GridContainer>
    )
}



