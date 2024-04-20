package com.example.authenticationservice.controller

import com.example.authenticationservice.request.AuthenticationRequest
import com.example.authenticationservice.request.RegistrationRequest
import com.example.authenticationservice.service.AuthenticationService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/authentication")
class AuthenticationController(private val authenticationService: AuthenticationService) {

    @PostMapping("/reg")
    fun registration(@RequestBody request: RegistrationRequest) = authenticationService.registration(request)

    @PostMapping("/auth")
    fun auth(@RequestBody request: AuthenticationRequest) = authenticationService.authentication(request)

}