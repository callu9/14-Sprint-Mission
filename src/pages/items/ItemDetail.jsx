import { useParams } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import ItemDetailComments from "./components/detail/ItemDetailComments";
import ItemDetailPost from "./components/detail/ItemDetailPost";
import "./itemdetail.scss";

export default function ItemDetail() {
  const { productId } = useParams();

  return (
    <>
      <title>판다마켓 - 상품 상세</title>
      <HeaderNav />
      <main className="display-grid justify-stretch gap-40" id="item-detail">
        <ItemDetailPost productId={productId} />
        <hr />
        <ItemDetailComments productId={productId} />
      </main>
    </>
  );
}
