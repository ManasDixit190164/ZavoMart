import { ProductItem } from '@/src/components/ProductItem';
import renderer from 'react-test-renderer';
import { Product } from '@/src/models/Product';

it(`renders correctly`, () => {
  const tree = renderer.create(<ProductItem onPress={()=>{}} onToggleFavorite={()=>{}} product={{id : 1 , description:"" , image:"" , name:"Jean" , price:1000 , isFavorite:false}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
