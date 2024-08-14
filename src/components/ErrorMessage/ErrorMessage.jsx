import css from './ErrorMessage.module.css'

export const ErrorMessage = ({ message }) => {
    return (
      <div className={css.error}>
        {message}
      </div>
    );
  };
  
