import React from "react";

const AddOption = props => {
  return (
    <div>
      {console.log(props.error)}
      {!!props.error && <p className="add-option-error">{props.error}</p>}
      <form onSubmit={props.handleAddOption} className="add-option">
        <input
          type="text"
          name="submit"
          placeholder="List option here"
          className="add-option__input"
        />
        <button className="button button-org">Submit</button>
      </form>
    </div>
  );
};
export { AddOption as default };
