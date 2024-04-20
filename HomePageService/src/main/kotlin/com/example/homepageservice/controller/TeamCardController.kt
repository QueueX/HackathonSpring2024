package com.example.homepageservice.controller

import com.example.homepageservice.service.TeamCardService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/team")
class TeamCardController(private val teamCardService: TeamCardService) {

    @GetMapping("/id{id}")
    fun getTeamCard(@PathVariable id: Int) = teamCardService.getTeamCard(id)

}