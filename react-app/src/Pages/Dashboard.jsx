import style from "../Styles/style.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Input,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PrintIcon from "@mui/icons-material/Print";
import avocado from "../Components/Avocado Hass.jpg";
import CheckIcon from "@mui/icons-material/Check";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/action";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [id, setId] = useState(1);
  const [status, setStatus] = useState("Approved");

  const handleOpen = (todo, newStatus) => {
    setOpen(true);
    setId(todo);
    setStatus(newStatus);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen1 = (todo, newStatus) => {
    setOpen1(true);
    setId(todo);
    setStatus(newStatus);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const dispatch = useDispatch();

  const { product } = useSelector((store) => store.reducer);

  useEffect(() => {
    handleGetData();
  }, [id, status]);

  const handleGetData = () => {
    fetch("http://localhost:8080/data", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("apidata", res);
        dispatch(getProducts(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateStatus = () => {
    console.log(id, status);
    fetch(`http://localhost:8080/data/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: status }),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        handleGetData();
      })
      .catch((err) => {
        console.log(err);
      });

    setOpen(false);
    setOpen1(false);
  };

  const isBackColor = (color) => {
    if (color == "Approved") {
      return "green";
    } else if (color == "Missing") {
      return "red";
    } else if (color == "Missing_Urgent") {
      return "orange";
    }
  };

  //console.log("product", product);

  return (
    <div>
      <nav>
        <div className={style.logo_box}>
          <h1>Reeco</h1>
          <p>
            <a href="#">Store</a>
          </p>
          <p>
            <a href="#">Orders</a>
          </p>
          <p>
            <a href="#">Analytics</a>
          </p>
        </div>
        <div className={style.profile_box}>
          <div>
            <ShoppingCartOutlinedIcon />
            <div></div>
          </div>
          <p>
            Hello, Vinay{" "}
            <div>
              <KeyboardArrowDownIcon />
            </div>
          </p>
        </div>
      </nav>
      <section>
        <div className={style.section_first_box}>
          Orders {`>`} <span>Order 32457ABC</span>
        </div>
        <div className={style.section_second_box}>
          <div>
            <h1>Order 32457ABC</h1>
          </div>
          <div>
            <button>Back</button>
            <button>Approve order</button>
          </div>
        </div>
      </section>
      <main>
        <div className={style.main_first_box}>
          <div>
            <h4>Supplier</h4>
            <h3>East coast fruites & vegetables</h3>
          </div>
          <div>
            <h4>Status</h4>
            <h3>Awaiting your approvel</h3>
          </div>
          <div>
            <h4>Supplier</h4>
            <h3>East coast fruites & vegetables</h3>
          </div>
          <div>
            <h4>Status</h4>
            <h3>Awaiting your approvel</h3>
          </div>
          <div>
            <h4>Supplier</h4>
            <h3>East coast fruites & vegetables</h3>
          </div>
          <div>
            <h4>Status</h4>
            <h3>Awaiting your approvel</h3>
          </div>
        </div>
        <div className={style.main_second_box}>
          <div className={style.product_search_box}>
            <div className={style.input_box}>
              <input className={style.input} type="text" placeholder="Search" />
              <Button startIcon={<SearchIcon />}></Button>
            </div>
            <div className={style.add_item_button_box}>
              <button>Add Item</button>
              <span>
                <PrintIcon />
              </span>
            </div>
          </div>

          <div className={style.container_table}>
            <table>
              <thead>
                <tr>
                  <th>Product name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {product &&
                  product?.map((el) => (
                    <tr key={el.id}>
                      <td>
                        <div>
                          <img src={avocado} alt="image" />
                        </div>
                        <div>
                          <h4>{el.name}</h4>
                        </div>
                      </td>
                      <td>
                        <h4>{el.brand}</h4>
                      </td>
                      <td>
                        {el.price > 0 ? (
                          <div>
                            <h4>${el.newprice}/6*1LB</h4>
                            <h4 style={{ textDecoration: "line-through" }}>
                              ${el.price}/6*1LB
                            </h4>
                          </div>
                        ) : (
                          <div>
                            <h4>${el.newprice}/6*1LB</h4>
                          </div>
                        )}
                      </td>
                      <td>
                        <h4>{el.quantity}x6*1LB</h4>
                      </td>
                      <td>
                        {el.price > 0 ? (
                          <div>
                            <h4>${el.newprice * el.quantity*12}</h4>
                            <h4 style={{ textDecoration: "line-through" }}>
                              ${el.price * el.quantity*12}
                            </h4>
                          </div>
                        ) : (
                          <div>
                            <h4>${el.newprice * el.quantity*12}</h4>
                          </div>
                        )}
                      </td>
                      <td>
                        <div>
                          <div
                            style={{
                              backgroundColor: `${isBackColor(el.status)}`,
                              color: "white",
                              fontWeight: "bold",
                              padding: "5px 10px",
                              borderRadius: "50px",
                            }}
                          >
                            {el.status}
                          </div>
                        </div>
                        <div>
                          <div>
                            <IconButton
                              onClick={() => handleOpen(el.id, "Approved")}
                            >
                              <CheckIcon />
                            </IconButton>

                            <Dialog open={open} onClose={handleClose}>
                              <DialogTitle>Approved Product</DialogTitle>
                              <DialogContent>
                                <DialogContentText>{el.name}</DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleUpdateStatus}>
                                  Yes
                                </Button>
                                <Button onClick={handleClose}>No</Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                          <div>
                            <IconButton
                              onClick={() => handleOpen1(el.id, "Missing")}
                            >
                              <ClearIcon />
                            </IconButton>

                            <Dialog open={open1} onClose={handleClose1}>
                              <DialogTitle>Missing Product</DialogTitle>
                              <DialogContent>
                                <DialogContentText>{el.name}</DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleUpdateStatus}>
                                  Yes
                                </Button>
                                <Button onClick={handleClose1}>No</Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                          <div>
                            <IconButton>
                              <EditCalendarIcon />
                            </IconButton>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <br />
      <br />
    </div>
  );
}
export default Dashboard;
