import styles from "./data-orders.module.css";

const DataOrders = ({ selectedOrder, formatPrice }) => {
  return (
    <section className={styles.orders}>
      <h3>Your order</h3>

      <h5>Items you ordered</h5>
      <div className={styles.order_items}>
        {selectedOrder?.items.map((product) => {
          return (
            <div key={product.id} className={styles.order_item}>
              <div>
                <p>{`${product.name} (${product.size})`}</p>
              </div>
              <div className={styles.item_details}>
                <p>{formatPrice(product.price)}</p>
                <p>{`x${product.count}`}</p>
                <p>{formatPrice(Number(product.price) * product.count)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr />

      <div className={styles.delivery}>
        <h5>Delivery</h5>
        <div>
          <p>Service fee</p>
          <p>5,00</p>
        </div>
      </div>
      <hr />
      <div className={styles.total_price}>
        <h5>Total</h5>
        <p>{formatPrice(selectedOrder?.totalPrice)}</p>
      </div>
      <hr />

      <h3 className={styles.info}>Order Info</h3>

      <div>
        <p>Order ID: {selectedOrder?.id}</p>
        <p>Timestamp: {selectedOrder?.date}</p>
        <p>Service provider: Pizza House, support@pizzahouse.com</p>
      </div>
    </section>
  );
};

export default DataOrders;
