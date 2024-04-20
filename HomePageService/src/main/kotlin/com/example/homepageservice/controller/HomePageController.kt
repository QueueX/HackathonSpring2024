package com.example.homepageservice.controller

import com.example.homepageservice.service.HomePageService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/homepage")
class HomePageController(private val homePageService: HomePageService) {

    @GetMapping
    fun getTeamsCarousel() = homePageService.getTeamsCarousel()

}