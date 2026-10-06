import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export type Produto = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffffff;
  padding-top: 40px;
`;

export const Header = styled.View`
  padding: 0 16px 10px 16px;
`;

export const ScreenTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 12px;
`;

export const SearchInput = styled.TextInput`
  background-color: #ffffff;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  color: #000000;
`;

export const CategoryListWrapper = styled.View`
  margin-top: 14px;
  max-height: 42px;
`;

export const CategoryChip = styled.Pressable<{ ativo: boolean }>`
  background-color: ${(p) => (p.ativo ? '#000000' : '#ffffff')};
  border-width: 1px;
  border-color: #000000;
  padding: 8px 16px;
  border-radius: 22px;
  margin-right: 8px;
`;

export const CategoryChipText = styled.Text<{ ativo: boolean }>`
  color: ${(p) => (p.ativo ? '#ffffff' : '#000000')};
  font-size: 13px;
`;

export const ProductGridWrapper = styled.View`
  flex: 1;
  padding-horizontal: 10px;
`;

export const ProductCard = styled.Pressable`
  flex: 1;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #000000;
  margin: 6px;
  border-radius: 10px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 110px;
`;

export const ProductInfo = styled.View`
  margin-top: 8px;
`;

export const ProductTitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000000;
`;

export const ProductPrice = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-top: 4px;
`;

export const ProductRating = styled.Text`
  font-size: 12px;
  color: #000000;
  margin-top: 2px;
`;

export const MessageText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 40px;
  color: #000000;
`;


export const BottomBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  border-top-width: 1px;
  border-top-color: #000000;
  background-color: #ffffff;
`;

export const BottomBarButton = styled.Pressable`
  align-items: center;
  padding: 4px 12px;
`;

export const BottomBarIcon = styled.View<{ ativo: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  border-width: 2px;
  border-color: #000000;
  background-color: ${(p) => (p.ativo ? '#000000' : '#ffffff')};
  margin-bottom: 4px;
`;

export const BottomBarLabel = styled.Text<{ ativo: boolean }>`
  font-size: 11px;
  color: #000000;
  font-weight: ${(p) => (p.ativo ? 'bold' : 'normal')};
`;