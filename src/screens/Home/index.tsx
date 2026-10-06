import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import {
  ScreenContainer,
  Header,
  ScreenTitle,
  SearchInput,
  CategoryListWrapper,
  CategoryChip,
  CategoryChipText,
  ProductGridWrapper,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductRating,
  MessageText,
  BottomBar,
  BottomBarButton,
  BottomBarIcon,
  BottomBarLabel,
  Produto,
} from './styled';

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('todas');
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [abaAtiva, setAbaAtiva] = useState('inicio');

  useEffect(() => {
    buscarDados();
  }, []);

  async function buscarDados() {
    try {
      const r1 = await fetch('https://fakestoreapi.com/products');
      const listaProdutos: Produto[] = await r1.json();
      setProdutos(listaProdutos);

      const r2 = await fetch('https://fakestoreapi.com/products/categories');
      const listaCategorias: string[] = await r2.json();
      setCategorias(listaCategorias);
    } catch (e) {
      
      setProdutos([
        {
          id: 1,
          title: 'Fjallraven Backpack',
          price: 109.95,
          description: 'Mochila perfeita para o dia a dia.',
          category: "men's clothing",
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: { rate: 3.9, count: 120 },
        },
        {
          id: 2,
          title: 'Mens Casual T-Shirt',
          price: 22.3,
          description: 'Camiseta casual.',
          category: "men's clothing",
          image:
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          rating: { rate: 4.1, count: 259 },
        },
        {
          id: 3,
          title: 'Mens Cotton Jacket',
          price: 55.99,
          description: 'Jaqueta de algodão.',
          category: "men's clothing",
          image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
          rating: { rate: 4.7, count: 500 },
        },
        {
          id: 4,
          title: 'Gold Bracelet',
          price: 695,
          description: 'Pulseira dourada.',
          category: 'jewelery',
          image:
            'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
          rating: { rate: 4.6, count: 400 },
        },
        {
          id: 5,
          title: 'Cavalo Grande',
          price: 9.99,
          description: 'Anel de prata.',
          category: 'jewelery',
          image:
            'https://www.petz.com.br/blog/wp-content/uploads/2025/06/racas-de-cavalo-capa.jpg',
          rating: { rate: 2.9, count: 70 },
        },
        {
          id: 6,
          title: 'WD 2TB External Hard Drive',
          price: 64,
          description: 'HD externo de 2TB.',
          category: 'electronics',
          image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
          rating: { rate: 3.3, count: 203 },
        },
      ]);

      setCategorias([
        'electronics',
        'jewelery',
        "men's clothing",
        "women's clothing",
      ]);
    } finally {
      setCarregando(false);
    }
  }

  const produtosFiltrados = produtos
    .filter((p) => categoriaAtiva === 'todas' || p.category === categoriaAtiva)
    .filter((p) => p.title.toLowerCase().includes(busca.toLowerCase()));

  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>Produtos</ScreenTitle>

        <SearchInput
          placeholder="Buscar produtos"
          placeholderTextColor="#000000"
          value={busca}
          onChangeText={setBusca}
        />

        <CategoryListWrapper>
          <FlatList<string>
            horizontal
            showsHorizontalScrollIndicator={false}
            data={['todas', ...categorias]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <CategoryChip
                ativo={categoriaAtiva === item}
                onPress={() => setCategoriaAtiva(item)}
              >
                <CategoryChipText ativo={categoriaAtiva === item}>
                  {item === 'todas'
                    ? 'Todos'
                    : item === 'electronics'
                    ? 'Eletrônicos'
                    : item === 'jewelery'
                    ? 'Joias'
                    : item === "men's clothing"
                    ? 'Roupas'
                    : item === "women's clothing"
                    ? 'Roupas femininas'
                    : item}
                </CategoryChipText>
              </CategoryChip>
            )}
          />
        </CategoryListWrapper>
      </Header>

      {carregando && <MessageText>Carregndo</MessageText>}

      {!carregando && (
        <ProductGridWrapper>
          <FlatList<Produto>
            data={produtosFiltrados}
            keyExtractor={(item) => String(item.id)}
            numColumns={2}
            renderItem={({ item }) => {
              const imageSource = { uri: item.image };
              return (
                <ProductCard>
                  <ProductImage source={imageSource} resizeMode="contain" />
                  <ProductInfo>
                    <ProductTitle numberOfLines={2}>
                      {item.title}
                    </ProductTitle>
                    <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                    <ProductRating>★ {item.rating.rate}</ProductRating>
                  </ProductInfo>
                </ProductCard>
              );
            }}

          />
        </ProductGridWrapper>
      )}

      <BottomBar>
        <BottomBarButton onPress={() => setAbaAtiva('inicio')}>
          <BottomBarIcon ativo={abaAtiva === 'inicio'} />
          <BottomBarLabel ativo={abaAtiva === 'inicio'}>Início</BottomBarLabel>
        </BottomBarButton>

        <BottomBarButton onPress={() => setAbaAtiva('busca')}>
          <BottomBarIcon ativo={abaAtiva === 'busca'} />
          <BottomBarLabel ativo={abaAtiva === 'busca'}>Busca</BottomBarLabel>
        </BottomBarButton>

        <BottomBarButton onPress={() => setAbaAtiva('sacola')}>
          <BottomBarIcon ativo={abaAtiva === 'sacola'} />
          <BottomBarLabel ativo={abaAtiva === 'sacola'}>Sacola</BottomBarLabel>
        </BottomBarButton>

        <BottomBarButton onPress={() => setAbaAtiva('perfil')}>
          <BottomBarIcon ativo={abaAtiva === 'perfil'} />
          <BottomBarLabel ativo={abaAtiva === 'perfil'}>Perfil</BottomBarLabel>
        </BottomBarButton>
      </BottomBar>
    </ScreenContainer>
  );
}