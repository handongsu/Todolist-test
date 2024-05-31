import "Item.css";

const Item = ({ todo }) => {
  return (
    <div className="Item_wrapper">
      <div>작업</div>
      <div>
        <select>
          <option>미시작</option>
          <option>진행중</option>
          <option>완료</option>
        </select>
      </div>
      <div>{new Date().toISOString()}</div>
      <button>제거</button>
    </div>
  );
};

export default Item;
