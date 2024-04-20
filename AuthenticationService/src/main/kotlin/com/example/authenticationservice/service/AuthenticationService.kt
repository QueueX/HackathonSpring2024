package com.example.authenticationservice.service

import com.example.authenticationservice.entity.MembersEntity
import com.example.authenticationservice.entity.Role
import com.example.authenticationservice.entity.TeamEntity
import com.example.authenticationservice.entity.UserEntity
import com.example.authenticationservice.repository.MemberRepository
import com.example.authenticationservice.repository.TeamRepository
import com.example.authenticationservice.repository.UserRepository
import com.example.authenticationservice.request.AuthenticationRequest
import com.example.authenticationservice.request.RegistrationRequest
import com.example.authenticationservice.response.JwtAuthResponse
import com.example.authenticationservice.response.UserResponse
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthenticationService(
    private val authenticationManager: AuthenticationManager,
    private val userRepository: UserRepository,
    private val jwtService: JwtService,
    private val teamRepository: TeamRepository,
    private val memberRepository: MemberRepository,
    private val passwordEncoder: BCryptPasswordEncoder
) {

    fun authentication(request: AuthenticationRequest): Any {
        try {
            authenticationManager.authenticate(UsernamePasswordAuthenticationToken(request.login, request.password))
            val user = userRepository.findByLogin(request.login)
            return JwtAuthResponse(jwtService.generateToken(user), UserResponse().apply {
                this.username = user.username!!
                this.email = user.email!!
                this.role = user.role!!
            })
        } catch (e: Exception) {
            return ResponseEntity("Неверные логин и/или пароль!", HttpStatus.BAD_REQUEST)
        }
    }

    fun registration(request: RegistrationRequest): Any {
        try {
            // Добавляем команду в БД
            val team = TeamEntity().apply {
                this.teamName = request.name
                this.bannerUrl = request.bannerUrl
            }
            teamRepository.save(team)

            // Добавляем участников команды в БД
            request.members.forEach { memberData ->
                val member = MembersEntity().apply {
                    this.name = memberData.name
                    this.photoUrl = memberData.photoUrl
                    this.aboutUser = memberData.about
                    this.teamId = team
                }
                memberRepository.save(member)
            }

            // Добавляем пользователя в БД
            val user = UserEntity().apply {
                this.email = request.email
                this.login = request.login
                this.authPassword = passwordEncoder.encode(request.password)
                this.teamId = team
                this.role = Role.USER
            }
            userRepository.save(user)

            return JwtAuthResponse(jwtService.generateToken(user), UserResponse().apply {
                this.username = user.username!!
                this.email = user.email!!
                this.role = user.role!!
            })
        } catch (e: Exception) {
            return ResponseEntity(mapOf("response" to "Не удалось создать учетную запись"), HttpStatus.BAD_REQUEST)
        }
    }

}
