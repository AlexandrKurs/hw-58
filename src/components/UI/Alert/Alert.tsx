import React, { PropsWithChildren, useState } from 'react';

interface Props extends PropsWithChildren{
  type: string;
  clickDismissable?: boolean;
}

const Alert: React.FC<Props> = ({type, clickDismissable=false, children}) => {
  const [open, setOpen] = useState(true);
  const closeAlert = () => setOpen(false);


  return open && (
    <div className={`alert alert-${type}`} role="alert" onClick={clickDismissable ? closeAlert : null}>
      <div className="row justify-content-between">
        <div className="col-11">{children}</div>
        <div className="col-1">
          {!clickDismissable ? <button className={`bg-${type}`} onClick={closeAlert}>X</button> : null}
        </div>
      </div>
    </div>
  );
};

export default Alert;