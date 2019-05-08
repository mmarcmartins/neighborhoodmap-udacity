import React, { Component } from "react";
import style from "./ActionsMenu.scss";

class ActionsMenu extends Component {
  state = {
    add: "",
    search: ""
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { add, search } = this.state;
    return (
      <div className={style.form}>
        <div className={style.add}>
          <label>Adicione um local ao mapa</label>
          <input
            type="text"
            value={this.state.add}
            name="add"
            onChange={evt => this.handleChange(evt)}
          />
          <input
            type="button"
            className={style["add-button"]}
            onClick={() => this.props.addLocation(add)}
            value="Adicionar"
          />
        </div>

        <div className={style.search}>
          <label>
            Digite para filtrar os locais
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={evt => this.handleChange(evt)}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default ActionsMenu;
