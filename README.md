# Grows-it Job Quest 2021 Edition

Thank you for your interest in working at Grows it. First, we would like to take a simple test on your coding skill.

Please fork this repo and work on the test. After finishing the test, please send your repo to peerapon.p@grows-it.com. Or you can simply reply an email that we've send you job quest link.

This quest has 2 parts
- **Part A: Basic JavaScript/TypeScript + Algorithm** (Only Backend job position **must** do this part)
- **Part B: Front-end (Coding + Architecture Design)** (Only **Front-end** or **Full-stack** position **must** do this part)

**Note:** Some answers can be answer in Thai language.

## Part A: Basic JavaScript/TypeScript + Algorithm

We would like to test your basic knowledge on writing JavaScript or TypeScript, plus we also want to test your algorithm skill a little bit.

What you need to do is write the code that solve each question and put it in folder `basic-js-ts`. We will run your code with **Node.js 12**, so check your fancy feature before using it!

**Noted that all questions on this part need to be implemented without using any external library like `lodash`**

1. **Fibonacci Sequence**: Write a function `fib` that return the value of n-th order of fibonacci sequence.

In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones:

```
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

**Example**

```javascript
> fib(1)
1

> fib(3)
2

> fib(12)
144
```

2. **Array shift**: Write a function `shift` that shifts the elements of array to left or right by n elements in an infinite loop.

The function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,

**Example**

```javascript
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```

3. **Vowels Count**: Write a function `Vowels` that Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces..

**Example**

```javascript
> Vowels('abracadabra')
5

> Vowels('pear tree')
4

> Vowels('o a kak ushakov lil vo kashu kakao')
13

> Vowels('my pyx')
0

```

4. **divisibleCount**: Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.

More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }.


**Example**

```javascript
Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10
```
**NOTE:** The test cases are very large. You will need a O(log n) solution or better to pass. (A constant time solution is possible.)

## Part B: Front-End
ส่วนของ Front-end ที่พัฒนาด้วย React โดยระบบที่ได้รับมอบหมายจะเป็นในส่วนของการลงทะเบียนนักวิ่งที่จะเข้ามาสมัครวิ่งในงาน

**Requirements และรายละเอียดของระบบ**
- งานวิ่งนี้มีแค่ระยะเดียวเท่านั้น
- การสมัครงานวิ่งนี้สมัครได้แค่ทีละคน ไม่มีการสมัครเป็นกลุ่มหลายคนให้
- ระบบต้องสามารถจัดเก็บข้อมูลทั้งหมดเหล่านี้ได้ครบถ้วนดังต่อไปนี้
  - ข้อมูลส่วนตัว
    - คำนำหน้าชื่อ (บังคับกรอก)
    - ชื่อ (ภาษาไทย และอังกฤษ) (บังคับกรอก)
    - นามสกุล (ภาษาไทย และอังกฤษ) (บังคับกรอก)
    - วันเดือนปีเกิด (บังคับกรอก)
    - อีเมล (ไม่บังคับกรอก)
    - เลขบัตรประจำตัวประชาชน (บังคับกรอก)
    - รูปถ่ายหน้าตรง (บังคับกรอก)
      - ความละเอียดขั้นต่ำ 300x300 pixel บังคับเป็น Square Resolution
    - ชื่อบนเบอร์วิ่ง (BIB) (บังคับกรอก)
      - กำหนดให้กรอกได้สูงสุด 10 ตัวอักษร ภาษาอังกฤษตัวพิมพ์ใหญ่ และตัวเลขเท่านั้น
  - ข้อมูลเกี่ยวกับการวิ่ง (บังคับกรอก)
    - เคยลงงานแข่ง Mini Marathon / Half Marathon / Full Marathon มาก่อนหรือไม่
    - เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้ (ชั่วโมงและนาที)
  - ผู้ติดต่อฉุกเฉิน
    - ผู้ติดต่อฉุกเฉินคนที่ 1  (บังคับกรอก)
      - ชื่อ-นามสกุล
      - ความสัมพันธ์
      - เบอร์โทรศัพท์
    - ผู้ติดต่อฉุกเฉินคนที่ 2  (ไม่บังคับกรอก)
      - ชื่อ-นามสกุล
      - ความสัมพันธ์
      - เบอร์โทรศัพท์
  - ข้อมูลทางการแพทย์
    - หมู่เลือด (ไม่บังคับกรอก)
      - A / B / O / AB
    - ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่ (บังคับกรอก)
      - หากตอบว่ามี ให้ระบุ
    - ท่านมีโรคประจำตัว หรือไม่ (บังคับกรอก)
      - หากตอบว่ามี ให้ระบุ
    - ท่านมีประวัติการผ่าตัด มาก่อนหรือไม่ (บังคับกรอก)
      - หากตอบว่ามี ให้ระบุตำแหน่งและปีที่รับการผ่าตัด
    - ท่านมีแพลนที่จะมีบุตร หรือ กำลังตั้งครรภ์ก่อนถึงช่วงการแข่งขันหรือไม่ (บังคับกรอก)
    - ท่านมียาที่ต้องทานเป็นประจำหรือไม่ (บังคับกรอก)
      - หากตอบว่ามี ให้ระบุ
    - ท่านเคยบาดเจ็บ/ เจ็บป่วย จากการเข้าร่วมงานวิ่ง ที่ต้องไปรักษาต่อที่โรงพยาบาลหรือไม่ (บังคับกรอก)
    - ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง ต่อสัปดาห์) (บังคับกรอก)
    - ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด ขณะออกกำลังกายหรือไม่? (บังคับกรอก)
- ต้องมีการแบ่งฟอร์มเป็น Step ตามหัวข้อ เนื่องจากฟอร์มใหญ่มาก User ไม่สามารถกรอกครบตามกำหนดได้ในครั้งแรก
- ระบบต้องสามารถทำการ Save Draft บันทึกไว้ในใน Localstorage ในฝั่ง Client
- การ Save Draft ไม่จำเป็นต้องกรอกครบทุกช่องก็สามารถ Save Draft ได้
- การกดเพื่อไปขั้นตอนต่อไป จะต้องมีการ Validate Form ให้ครบถ้วนเสมอ
- ในหน้าสุดท้าย จะมีขั้นตอนของการตรวจสอบข้อมูล ก่อนส่งใบสมัคร โดยต้องมีการแสดงข้อมูลทั้งหมดที่กรอกมา เพื่อตรวจสอบว่ามีข้อมูลอะไรผิดพลาดหรือไม่ และสามารถกดแก้ไขเพื่อกลับไปแก้ไขได้
- หลังการกด ปุ่ม ส่งข้อมูลที่หน้าสุดท้ายจะทำการเรียก API Register เพื่อส่งข้อมูลไปเก็บที่ฝั่งหลังบ้าน
- Assume ได้ว่าระบบนี้มี API หลังบ้านเรียบร้อยแล้วสำหรับทุก Action ที่ต้องส่งข้อมูลไปหาหลังบ้าน ไม่ต้อง Implement เอง

**API Doc**
https://docs.google.com/document/d/1k9hKcTewpVbUnUYfXHUsADkRs0xChScZWMHbDt64Kt0/edit?usp=sharing

**Figma Design**
https://www.figma.com/file/eNWi0L5BdLF4mgcJkLRtSG/Web-design?node-id=0%3A1

**สิ่งที่ต้องส่งมาเป็นคำตอบ**
- push Project ขึ้น gitlab พร้อมเขียน READEME.md อธิบายการ run Project