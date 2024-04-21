package com.example.profileservice.controller

import com.example.profileservice.entity.MembersEntity
import com.example.profileservice.service.ProfileService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping("/api/lk")
class ApiProfileController(private val profileService: ProfileService) {

    @GetMapping
    fun getProfile(@RequestHeader(value = "Authorization") token: String ) = profileService.getProfile(token)

    @GetMapping("/member/{id}")
    fun getMemberInfo(@PathVariable id: UUID) = profileService.getMemberInfo(id)

    @PostMapping("/member")
    fun changeMemberInfo(@RequestBody membersEntity: MembersEntity) = profileService.changeMemberInfo(membersEntity)

}