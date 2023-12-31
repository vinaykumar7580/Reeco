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
import { getProducts, getSingleProducts } from "../Redux/action";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [id, setId] = useState(0);
  const [id1, setId1] = useState(0);
  const [id2, setId2] = useState(0);
  const [status, setStatus] = useState("");
  const [status1, setStatus1] = useState("");

  const dispatch = useDispatch();

  const { product, productSingle } = useSelector((store) => store.reducer);

  const [formPrice, setFormPrice] = useState(productSingle?.newprice || 0);
  const [formQuantity, setFormQuantity] = useState(
    productSingle?.quantity || 0
  );
  const [formStatus, setFormStatus] = useState(productSingle?.status || "");

  useEffect(() => {
    setFormPrice(productSingle?.newprice || 0);
    setFormQuantity(productSingle?.quantity || 0);
    setFormStatus(productSingle?.status || "");
  }, [productSingle]);

  const handleOpen = (todo) => {
    setOpen(true);
    setId(todo);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen1 = (todo) => {
    setOpen1(true);
    setId1(todo);
    
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = (todo) => {
    setOpen2(true);
    setId2(todo);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  useEffect(()=>{
    handleSingleProduct();
  },[id2])

  const handleGetData = () => {
    fetch("https://lucky-plum-swimsuit.cyclic.app/data", {
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
    fetch(`https://lucky-plum-swimsuit.cyclic.app/data/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status:"Approved"}),
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
    
  };

  const handleUpdateStatus1 = () => {
    fetch(`https://lucky-plum-swimsuit.cyclic.app/data/${id1}`, {
      method: "PATCH",
      body: JSON.stringify({ status: "Missing" }),
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

    setOpen1(false);
    
  };

  const handleSingleProduct = () => {
    fetch(`https://lucky-plum-swimsuit.cyclic.app/data/${id2}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(getSingleProducts(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    fetch(`https://lucky-plum-swimsuit.cyclic.app/data/${id2}`, {
      method: "PATCH",
      body: JSON.stringify({
        newprice: formPrice,
        quantity: formQuantity,
        status: formStatus,
      }),
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

    setOpen2(false);
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
                          <img src={avocado} alt="images" />
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
                            <h4>${el.newprice * el.quantity * 12}</h4>
                            <h4 style={{ textDecoration: "line-through" }}>
                              ${el.price * el.quantity * 12}
                            </h4>
                          </div>
                        ) : (
                          <div>
                            <h4>${el.newprice * el.quantity * 12}</h4>
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
                              onClick={() => handleOpen(el.id)}
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
                              onClick={() => handleOpen1(el.id)}
                            >
                              <ClearIcon />
                            </IconButton>

                            <Dialog open={open1} onClose={handleClose1}>
                              <DialogTitle>Missing Product</DialogTitle>
                              <DialogContent>
                                <DialogContentText>{el.name}</DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleUpdateStatus1}>
                                  Yes
                                </Button>
                                <Button onClick={handleClose1}>No</Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                          <div>
                            <IconButton onClick={() => handleOpen2(el.id)}>
                              <EditCalendarIcon />
                            </IconButton>

                            <Dialog
                              PaperProps={{ style: { padding: "20px" } }}
                              open={open2}
                              onClose={handleClose2}
                            >
                              <DialogTitle>
                                {productSingle && productSingle?.name}
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  American Roland
                                </DialogContentText>
                                <div className={style.edit_box}>
                                  <div>
                                    <img src={avocado} alt="poster" />
                                  </div>
                                  <div>
                                    <h4>price</h4>
                                    <h4>quantity</h4>
                                    <h4>status</h4>
                                  </div>
                                  <div>
                                    <h4>
                                      <input
                                        type="number"
                                        value={formPrice}
                                        onChange={(e) =>
                                          setFormPrice(e.target.value)
                                        }
                                      />
                                    </h4>
                                    <h4>
                                      <input
                                        type="number"
                                        value={formQuantity}
                                        onChange={(e) =>
                                          setFormQuantity(e.target.value)
                                        }
                                      />
                                    </h4>
                                    <h4>
                                      <select
                                        value={formStatus}
                                        onChange={(e) =>
                                          setFormStatus(e.target.value)
                                        }
                                      >
                                        <option value="Approved">
                                          Approve
                                        </option>
                                        <option value="Missing">Missing</option>
                                        <option value="Missing_Urgent">
                                          Missing Urgent
                                        </option>
                                      </select>
                                    </h4>
                                  </div>
                                </div>
                              </DialogContent>
                              <DialogActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleEdit}
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleClose2}
                                >
                                  Cancel
                                </Button>
                              </DialogActions>
                            </Dialog>
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
