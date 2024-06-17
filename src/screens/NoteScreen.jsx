import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Dialog,
  Paragraph,
  Portal,
  Provider,
  Surface,
} from 'react-native-paper';
import { FlatList, View, Linking } from 'react-native'; // Importe Linking do react-native
import { styles } from '../config/styles';
import { fetchNews } from '../services/newsApi';

export default function NoteScreen() {
  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({
    title: '',
    description: '',
    url: '',
  });

  useEffect(() => {
    loadNews();
  }, []);

  const showDialog = (article = { title: '', description: '', url: '' }) => {
    setCurrentArticle(article);
    setVisible(true);
  };

  const loadNews = async () => {
    const news = await fetchNews('technology'); 
    setArticles(news);
  };

  const handleOpenInBrowser = () => {
    if (currentArticle.url) {
      Linking.openURL(currentArticle.url)
        .then(() => console.log('Abrindo URL no navegador:', currentArticle.url))
        .catch((err) => console.error('Erro ao abrir URL:', err));
    }
  };

  return (
    <Provider>
      <Surface style={styles.container}>
        <View style={styles.innerContainer}>
          <FlatList
            style={{ flex: 1, width: '100%' }}
            data={articles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Card style={{ marginBottom: 10 }}>
                <Card.Title title={item.title} />
                <Card.Content>
                  <Paragraph>{item.description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button onPress={() => showDialog(item)}>Ver Mais</Button>
                </Card.Actions>
              </Card>
            )}
          />
          <NoteDialog
            visible={visible}
            hideDialog={() => setVisible(false)}
            article={currentArticle}
            onOpenInBrowser={handleOpenInBrowser} // Passando a função para o componente NoteDialog
          />
        </View>
      </Surface>
    </Provider>
  );
}

const NoteDialog = ({ visible, hideDialog, article, onOpenInBrowser }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{article.title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{article.description}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Fechar</Button>
          {article.url && (
            <Button onPress={onOpenInBrowser}>Ver no Navegador</Button>
          )}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
