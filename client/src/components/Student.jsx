export default function Student (props) {  
  const {firstName, lastName, email, age, grade, deleteOne} = props;
  return (
    <tr>
      <td><input type="checkbox" name="" id="" /></td>
      <td>{ firstName }</td>
      <td>{ lastName }</td>
      <td>{ email }</td>
      <td>{ age }</td>
      <td>{ grade }</td>
      <td><button className='btn edit'>Edit</button><button className='btn danger' onClick={ deleteOne }>Delete</button></td>
    </tr>
  );
}; 