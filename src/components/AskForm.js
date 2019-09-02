import React from "react";
import { useInput } from "../hooks/input-hook";
import { connect } from "react-redux";
import { addAsk } from "../state/ask/actions";
import { Section } from "react-bulma-components";
const ConnectedAsk = props => {
  const {
    value: question,
    bind: bindQuestion,
    reset: resetQuestion
  } = useInput("");
  const { value: askee, bind: bindAskee, reset: resetAskee } = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addAsk({ question: question, askee: askee });
    resetQuestion();
    resetAskee();
  };

  const isEnabled = question.length > 1 && askee.length > 1;

  return (
    <Section>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <label className="label">Question</label>

              <input
                className="input"
                {...bindQuestion}
                placeholder="Question"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <label className="label">Askee</label>

              <input className="input" {...bindAskee} placeholder="Askee" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="control">
            <button className="button is-link" disabled={!isEnabled}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addAsk: ask => dispatch(addAsk(ask))
  };
};

const AskForm = connect(
  null,
  mapDispatchToProps
)(ConnectedAsk);

export default AskForm;
