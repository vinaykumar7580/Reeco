import style from "../Styles/style.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Dashboard() {
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
        <div className={style.main_second_box}></div>
      </main>
    </div>
  );
}
export default Dashboard;
