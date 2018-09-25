import * as React from "react";
import t from '../../Lang/language';
import { MultilanguageState } from '../../Lang/MultilanguageState';

export interface MultilanguageProps { compiler: string; framework: string; }

export class Multilanguage extends React.Component<MultilanguageProps, MultilanguageState> {

    public constructor(props: MultilanguageProps, state: MultilanguageState) {
        super(props);

        this.state = {
            status: '',
            currentLanguage: 0,
        };

        //this._getErrorMessage = this._getErrorMessage.bind(this);
    }

    public async componentWillMount() {
        console.log("componentWillMount!!");
        
    }

    render() {
        return (
            <div>
               Multi language
            </div>
        );
    }

    // public onLinkClick(item: PivotItem): void {
    //     console.log(item.props.linkText);
    //     let languageSelected = 0;
    //     switch (item.props.itemKey) {
    //         case "de":
    //             languageSelected = 1;
    //             break;
    //         case "it":
    //             languageSelected = 2;
    //             break;
    //         case "es":
    //             languageSelected = 3;
    //             break;
    //     }
    //     this.setState({
    //         currentLanguage: languageSelected
    //     })
    // }
}