import React, { Component } from "react";

import style from "./ActionsMenu.scss";

class ActionsMenu extends Component {
    state = {
        add: '',
        search: ''
    }
    render() {
        return (
            <div className={style.form}>

                <div className={style.add}>
                    <label>Adicione um local ao mapa</label>
                    <input
                        type="text"
                        onChange={() => (
                            console.log('Local')
                        )}
                        value={this.state.add}
                    />
                    <input type="button" className={style['add-button']} value="Add" />
                </div>

                <div className={style.search}>
                    <label>Digite para filtrar os locais
                           <input
                            type="text"
                            value={this.state.search}
                            placeholder="Filter table content by username"
                            onChange={() => (
                                console.log('eu ae')
                            )}
                        />
                    </label>

                </div>

            </div>
        );
    }
}

export default ActionsMenu;
