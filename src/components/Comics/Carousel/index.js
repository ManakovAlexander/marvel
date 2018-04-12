// @flow
import React, { Component } from 'react'
import BannerCarousel from 'react-native-banner-carousel'
import { Image, View, Dimensions } from 'react-native'
import { Container, Body } from 'native-base'

const BannerWidth = 168;
const BannerHeight = 252;

export const Carousel = ({ images }) => {
  if (!images || (images && images.length === 0)) {
    return null
  }
  if (images && images.length === 1) {
    return (
      <Body>
        {renderPage(images[0], 0)}
      </Body>
    )
  }
  return (
    <Body>
      <BannerCarousel
        loop
        index={0}
        pageSize={BannerWidth}
      >
        {
          images.map((image, index) => renderPage(image, index))
        }
      </BannerCarousel>
    </Body>
  )
}

const renderPage = (image, index) => {
  return (
    <View key={index}>
      <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: thumbnailUri(image) }} />
    </View>
  );
}

const thumbnailUri = (thumbnail) => thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : undefined