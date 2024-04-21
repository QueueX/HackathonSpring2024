package com.example.profileservice.service

import com.example.profileservice.entity.MembersEntity
import com.example.profileservice.entity.UserEntity
import com.example.profileservice.repository.MemberRepository
import com.example.profileservice.repository.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class ProfileService(
    private val userRepository: UserRepository,
    private val memberRepository: MemberRepository,
    private val jwtService: JwtService
) {

    fun getProfile(token: String) : Any {
        return try {
            ResponseEntity(userRepository.findUserEntityByLogin(jwtService.extractUsername(token)), HttpStatus.OK)
        } catch (e: Exception) {
            ResponseEntity("Произошла неведомая ошибка!", HttpStatus.UNAUTHORIZED)
        }
    }

    fun getMemberInfo(id: UUID) : Any {
        return try {
            ResponseEntity(memberRepository.getMembersEntityById(id), HttpStatus.OK)
        } catch (e: Exception) {
            ResponseEntity("Участник с данным id не найден!", HttpStatus.NOT_FOUND)
        }
    }

    fun changeMemberInfo(membersEntity: MembersEntity): Any {
        try {
            memberRepository.deleteMembersEntityById(membersEntity.id!!)
            memberRepository.save(membersEntity)
            return ResponseEntity("Информация об участнике успешно изменена!", HttpStatus.OK)
        } catch (e: Exception) {
            return ResponseEntity("Ошибка! Не удалось внести изменения!", HttpStatus.BAD_REQUEST)
        }
    }

}