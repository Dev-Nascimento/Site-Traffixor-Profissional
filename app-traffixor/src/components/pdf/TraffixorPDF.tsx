import React from 'react';
import { Document, Page, Text, View, StyleSheet, Svg, Path, Circle } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { backgroundColor: '#060609', color: '#ffffff', padding: 40, fontFamily: 'Helvetica' },
  cover: { flex: 1, justifyContent: 'center', alignItems: 'center', border: '1pt solid #10B981', margin: 10 },
  titleCover: { fontSize: 32, color: '#10B981', textAlign: 'center', fontWeight: 'bold' },
  
  header: { flexDirection: 'row', justifyContent: 'space-between', borderBottom: '0.5pt solid #10B981', paddingBottom: 5, marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#10B981', marginTop: 15, marginBottom: 10 },
  text: { fontSize: 10, lineHeight: 1.6, color: '#cbd5e1', marginBottom: 10, textAlign: 'justify' },
  
  flowCard: { backgroundColor: '#0f172a', padding: 12, borderRadius: 4, borderLeft: '3pt solid #10B981', marginBottom: 12 },
  flowTitle: { fontSize: 11, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
  
  cta: { marginTop: 30, padding: 20, border: '1pt dashed #10B981', alignItems: 'center' },
  footerText: { position: 'absolute', bottom: 30, left: 40, right: 40, fontSize: 7, color: '#475569', textAlign: 'center' }
});

const Logo = () => (
  <Svg width="60" height="60" viewBox="0 0 100 100">
    <Path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" stroke="#10B981" strokeWidth="4" fill="none" />
    <Circle cx="50" cy="50" r="8" fill="#10B981" />
  </Svg>
);

export const TraffixorPDF = () => (
  <Document title="Traffixor Playbook - Automacao Neural">
    <Page size="A4" style={styles.page}>
      <View style={styles.cover}>
        <Logo />
        <Text style={[styles.titleCover, { marginTop: 20 }]}>GUIA DEFINITIVO</Text>
        <Text style={styles.titleCover}>AUTOMACAO NEURAL</Text>
        <Text style={{ fontSize: 12, marginTop: 10, letterSpacing: 2 }}>ORQUESTRACAO E ESCALA B2B</Text>
        <Text style={{ fontSize: 8, color: '#475569', marginTop: 100 }}>TRAFFIXOR // SISTEMAS NEURAIS @ 2026</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.header}><Text style={{ color: '#10B981', fontSize: 9 }}>TRAFFIXOR SYSTEMS</Text></View>
      <Text style={styles.sectionTitle}>CAPITULO 1: O CAOS INVISIVEL</Text>
      <Text style={styles.text}>Empresas modernas morrem sufocadas pelo caos operacional. O problema aparece na queda das conversoes e no aumento do CAC. Sistemas desconectados criam silos que drenam receita silenciosamente.</Text>
      <Text style={styles.sectionTitle}>CAPITULO 2: O QUE E AUTOMACAO NEURAL?</Text>
      <Text style={styles.text}>Automacao tradicional executa tarefas. Automacao Neural orquestra decisoes baseadas em comportamento e dados reais de faturamento.</Text>
      <Text style={styles.footerText}>Documento Confidencial - Circulacao Restrita Traffixor</Text>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.header}><Text style={{ color: '#10B981', fontSize: 9 }}>FLUXOS DE ELITE</Text></View>
      <Text style={styles.sectionTitle}>CAPITULO 3: OS 5 FLUXOS DE OURO</Text>
      {[
        { t: "1. Follow-up Comportamental", c: "Identifica sinais de compra e aciona o time no momento exato." },
        { t: "2. Sincronizacao Ads e CRM", c: "Treina algoritmos de trafego com base em lucro real." },
        { t: "3. Lead Scoring Dinamico", c: "Filtra automaticamente leads prontos para venda." },
        { t: "4. Recuperacao de Intencao", c: "Recupera propostas ignoradas via fluxos de contingencia." }
      ].map((f, i) => (
        <View key={i} style={styles.flowCard}>
          <Text style={styles.flowTitle}>{f.t}</Text>
          <Text style={styles.text}>{f.c}</Text>
        </View>
      ))}
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.header}><Text style={{ color: '#10B981', fontSize: 9 }}>RESULTADOS</Text></View>
      <Text style={styles.sectionTitle}>O PROXIMO NIVEL</Text>
      <Text style={styles.text}>Voce pode construir sozinho ou implementar um Motor Neural ja validado para o seu crescimento.</Text>
      <View style={styles.cta}>
        <Text style={{ color: '#10B981', fontWeight: 'bold', fontSize: 14 }}>ATIVAR OPERACAO AGORA</Text>
        <Text style={{ fontSize: 10, marginTop: 10 }}>WWW.TRAFFIXOR.COM.BR</Text>
      </View>
      <Text style={styles.footerText}>Este documento foi editado e gerado dinamicamente pela infraestrutura Traffixor.</Text>
    </Page>
  </Document>
);