import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk dan segar.',
    moodSource: require('../../assets/moods/pagi-hari.jpg'), 
    borderColor: '#4ade80',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru yang didapat hari ini.',
    moodSource: { uri: 'https://picsum.photos/seed/focus/80' },
    borderColor: '#60a5fa',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah dan menenangkan pikiran.',
    moodSource: { uri: 'https://picsum.photos/seed/calm/80' },
    borderColor: '#facc15',
  },
  {
    id: 4,
    title: 'Makan Siang Bareng',
    date: '2026-10-10',
    preview: 'Makan siang di Foodcourt Ummi bareng teman setelah kelas selesai. Suasananya lumayan ramai hari ini.',
    moodSource: { uri: 'https://picsum.photos/seed/happy/80' },
    borderColor: '#f472b6',
  },
  {
    id: 5,
    title: 'Nugas Praktikum',
    date: '2026-10-11',
    preview: 'Fokus banget ngerjain project PBO dari sore sampai malam. Akhirnya semua kode jalan lancar.',
    moodSource: { uri: 'https://picsum.photos/seed/study/80' },
    borderColor: '#c084fc',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Header Baru dengan Avatar */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Buku Harian</Text>
        <Image
          source={{ uri: 'https://picsum.photos/seed/avatar/100' }} // Avatar dummy dari web
          style={styles.avatar}
        />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodSource={entry.moodSource}
          borderColor={entry.borderColor}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
});