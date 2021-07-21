const AdminFooter = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
      />
      {/* Font Awesome Icons */}
      <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
      {/* IonIcons */}
      <link
        rel="stylesheet"
        href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      />
      {/* Theme style */}
      <link rel="stylesheet" href="dist/css/adminlte.min.css" />
      <footer className="main-footer">
        <strong>
          Copyright © 2014-2021{"{"}" "{"}"}
          <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.1.0
        </div>
      </footer>
    </div>
  );
};

export default AdminFooter;
