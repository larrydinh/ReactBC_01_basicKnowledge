import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    //this.state là 1 thuộc tíh đặc biệt (có sẵn) của react class component, chứa các giá trị thay đổi trên giao diện người dùng thao tác
    isLogin: false,
  };

  userName = "Sicyber";
  //   isLogin = false;

  renderLoginTemplate = () => {
    if (this.state.isLogin) {
      return <a className="nav-link" href="_#">Hello {this.userName}</a>;
    }
    return (
      <button
        className="nav-link"
        onClick={(e) => {
          this.handleLogin();
        }}
      >
        Dang nhap
      </button>
    );
  };

  handleLogin = () => {
    //   this.state.isLogin =true;
    //   console.log(this.state.isLogin)
    //   this.render()
    let newState = {
      isLogin: true,
    };
    this.setState(newState, () => {
      console.log(this.state);
    }); //this.setState la phuong thuc co san cua react class component dùng để set lại giá trị biến state và làm render lại giao diện
  };
  //setState là hàm bất đồng bộ chứa 2 tham số là state mới và callback(hàm) thực thi sau khi render laji

  // this.setState({
  //     isLogin =true,
  // });

  // -------------------------------------------------
  //   hàm render chỉ chạy 1 lần duy nhất
  render() {
    return (
      <div classname="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  {/* {this.isLogin ? (
                    <a className="nav-link">Hello {this.userName}</a>
                  ) : (
                    <button>Dang nhap</button>
                  )} */}
                  {this.renderLoginTemplate()}
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
