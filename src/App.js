import { useState, useEffect } from 'react';

function App() {
  const data = [{id: 1, ownerId: 2, description: 'teste1' }, {id: 2, ownerId: 3, description: 'teste2'}, {id: 3, ownerId: 4, description: 'SELECTED CLASS'}]
  const data2 = [{id: 2, ownerId: 3, description: 'teste1' }, {id: 3, ownerId: 4, description: 'order 2'}, {id: 4, ownerId: 5, description: 'SELECTED ORDER'}]
  const data3 = [{id: 2, ownerId: 5, description: 'teste1' }, {id: 3, ownerId: 5, description: 'order 2'}, {id: 4, ownerId: 6, description: 'SELECTED REASON'}]

  const [selectedClass, setSelectedClass] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(3);
  const [selectedReasons, setSelectedReasons] = useState(2);

  const [orderId, setorderId] = useState();

  useEffect(() => {
    localStorage.removeItem('classes:')
    localStorage.removeItem('orders:')
    localStorage.removeItem('reasons:')
  },[])
  

  const getClass = JSON.parse(localStorage.getItem('classes:'))
  const getOrder = JSON.parse(localStorage.getItem('orders:'))
  const getReasons = JSON.parse(localStorage.getItem('reasons:'))


  useEffect(() => {
    if(selectedClass){
      localStorage.setItem('classes:', selectedClass)
    }
    if(selectedOrder){
      localStorage.setItem('orders:', selectedOrder)
    }
    if(selectedReasons){
      localStorage.setItem('reasons:', selectedReasons)
    }
  },[selectedClass, selectedOrder, selectedReasons]);

  useEffect(() => {
    if(selectedClass){
      setSelectedOrder(getClass?.ownerId)
    }

    if(selectedOrder){
      // setSelectedOrder(getOrder?.id)
      setSelectedReasons(getOrder?.id)
    }

  }, [getClass, getOrder, selectedClass, selectedOrder]);  

  
  return (
    <>
      <select 
      // value={2}
      onChange={(e) =>{
        setSelectedClass(e.target.value)}
        }>
        {data && data?.map((item) => (<option key={item.id} selected={item.id === 3} value={JSON.stringify(item)}>{item.description}</option>))}
      </select>

      <select 
      // value={2}
      onChange={(e) =>{
        setSelectedOrder(e.target.value)}
        }>
        {data2 && data2?.map((item) => (<option key={item.id} selected={item.id === selectedOrder} value={JSON.stringify(item)}>{item.description}</option>))}
      </select>
      
      <select 
        onChange={(e) =>{
        setSelectedReasons(e.target.value)}
        }>
        {data3 && data3?.map((item) => (<option key={item.id} selected={item.id === selectedReasons} value={JSON.stringify(item)}>{item.description}</option>))}
      </select>
    </>
  );
}

export default App;
