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
import { GetProduct } from "../Redux/action";


function Dashboard() {
  const [openRight, setOpenRight] = useState(false);
  const [openWrong, setOpenWrong] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch=useDispatch()

  const {product}=useSelector((store)=>store.reducer)

  useEffect(()=>{
    dispatch(GetProduct)
    
  },[])

  


  const handleOpenRight = () => {
    setOpenRight(true);
  };

  const handleCloseRight = () => {
    setOpenRight(false);
  };

  const handleOpenWrong = () => {
    setOpenWrong(true);
  };

  const handleCloseWrong = () => {
    setOpenWrong(false);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleUpdateStatus=(id, status)=>{
    
    

  }

  const isBackColor = (color) => {
    if (color == "Approved") {
      return "green";
    } else if (color == "Missing") {
      return "red";
    } else if (color == "Missing_Urgent") {
      return "orange";
    }
  };

  console.log("product", product)

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
                    <tr>
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
                        <h4>${el.newprice}/6*1LB</h4>
                        <h4>${el.oldprice}/6*1LB</h4>
                      </td>
                      <td>
                        <h4>{el.quantity}x6*1LB</h4>
                      </td>
                      <td>
                        <h4>{el.newprice * el.quantity}</h4>
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
                            <IconButton onClick={handleOpenRight}>
                              <CheckIcon />
                            </IconButton>

                            <Dialog open={openRight} onClose={handleCloseRight}>
                              <DialogTitle>Approved Product</DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  Is "{el.name}" Approved?
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleUpdateStatus(el.id, "Approved")}>Yes</Button>
                                <Button onClick={handleCloseRight}>No</Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                          <div>
                            <IconButton onClick={handleOpenWrong}>
                              <ClearIcon />
                            </IconButton>

                            <Dialog open={openWrong} onClose={handleCloseRight}>
                              <DialogTitle>Missing Product</DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  Is "{el.name}" Missing?
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button>Yes</Button>
                                <Button onClick={handleCloseWrong}>No</Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                          <div>
                            <IconButton onClick={handleOpenEdit}>
                              <EditCalendarIcon />
                            </IconButton>

                            <Dialog open={openEdit} onClose={handleCloseEdit}>
                              <DialogTitle>Popup Title</DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  This is the content of your popup.
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleCloseEdit}>Close</Button>
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
