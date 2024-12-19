import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const UserDetails = ({ route }) => {
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={user.name} subtitle={`@${user.username}`} />
        <Card.Content>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user.email}</Text>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>{user.phone}</Text>
          <Text style={styles.label}>Website</Text>
          <Text style={styles.value}>{user.website}</Text>

          <Text style={styles.sectionTitle}>Company</Text>
          <Text style={styles.value}>{user.company.name}</Text>

          <Text style={styles.sectionTitle}>Address</Text>
          <Text style={styles.value}>
            {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f6f8',
  },
  card: {
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#6200ee',
  },
  label: {
    fontSize: 14,
    color: '#495057',
    fontWeight: '600',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#212529',
    marginTop: 2,
  },
});

export default UserDetails;
