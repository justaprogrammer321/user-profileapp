import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`);
      const data = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...data]);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  const loadMore = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('User Details', { user: item })}>
      <Card.Content>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <>
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingMore ? <ActivityIndicator size="small" color="#6200ee" style={styles.footerLoader} /> : null
          }
          contentContainerStyle={styles.listContainer}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: '#f6f6f6',
  },
  card: {
    marginBottom: 12,
    borderRadius: 8,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLoader: {
    marginVertical: 12,
  },
});

export default Home;
